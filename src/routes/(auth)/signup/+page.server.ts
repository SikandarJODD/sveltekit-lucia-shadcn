import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";


import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/");
	return {};
};

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        // basic check
        if (
            typeof email !== "string" ||
            email.length < 4 ||
            email.length > 31
        ) {
            return fail(400, {
                message: "Invalid Email"
            });
        }
        if (
            typeof password !== "string" ||
            password.length < 6 ||
            password.length > 255
        ) {
            return fail(400, {
                message: "Invalid password"
            });
        }
        try {
            const user = await auth.createUser({
                key: {
                    providerId: "email", // auth method
                    providerUserId: email.toLowerCase(), // unique id when using "email" auth method
                    password // hashed by Lucia
                },
                attributes: {
                    email: String(email)
                }
            });
            // const session = await auth.createSession({
            //     userId: user.userId,
            //     attributes: {}
            // });
            // locals.auth.setSession(session); // set session cookie
        } catch (e) {
            console.log(e);
            return fail(500, {
                message: "An unknown error occurred"
            });
        }
        // redirect to
        // make sure you don't throw inside a try/catch block!
        throw redirect(302, "/login");
    }
};