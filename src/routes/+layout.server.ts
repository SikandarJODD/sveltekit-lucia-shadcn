// routes/+page.server.ts
import { redirect, fail } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) {
        return {
            email: session.user.email
        };
    }
    else {
        return {
            email: ''
        };
    }
};