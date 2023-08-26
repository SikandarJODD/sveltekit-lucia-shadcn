// routes/+page.server.ts
import { redirect,fail } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) throw redirect(302, "/login");
    return {
        userId: session.user.userId,
        email: session.user.email
    };
};