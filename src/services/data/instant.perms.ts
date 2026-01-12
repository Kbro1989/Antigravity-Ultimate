import type { InstantRules } from "@instantdb/react";

const rules = {
    // Default rules allowing public view and user-restricted writes
    $users: {
        allow: {
            view: "true",
            update: "auth.id == data.id"
        }
    },
    metabolism: {
        allow: {
            view: "true",
            create: "auth.id != null",
            update: "auth.id != null"
        }
    },
    traces: {
        allow: {
            view: "true",
            create: "auth.id != null"
        }
    },
    todos: {
        allow: {
            view: "true",
            create: "auth.id != null",
            update: "auth.id != null",
            delete: "auth.id != null"
        }
    }
} satisfies InstantRules;

export default rules;
