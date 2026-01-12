import { i } from "@instantdb/react";

const _schema = i.schema({
    entities: {
        $files: i.entity({
            path: i.string().unique().indexed(),
            url: i.string(),
        }),
        $users: i.entity({
            email: i.string().unique().indexed().optional(),
            imageURL: i.string().optional(),
            type: i.string().optional(),
        }),
        todos: i.entity({
            text: i.string(),
            done: i.boolean(),
            createdAt: i.number(),
        }),
        metabolism: i.entity({
            userId: i.string().unique().indexed(),
            cfTokens: i.number(),
            cfLimit: i.number(),
            cfResetAt: i.number(),
            geminiBudget: i.number(),
            geminiLimit: i.number(),
            geminiResetAt: i.number(),
            tier: i.string(),
            updatedAt: i.number(),
        }),
        traces: i.entity({
            timestamp: i.number().indexed(),
            layer: i.string().indexed(),
            action: i.string(),
            metadata: i.string(), // JSON stringified
            reasoning: i.string().optional(),
            userId: i.string().indexed(),
        }),
    },
    links: {
        $usersLinkedPrimaryUser: {
            forward: {
                on: "$users",
                has: "one",
                label: "linkedPrimaryUser",
                onDelete: "cascade",
            },
            reverse: {
                on: "$users",
                has: "many",
                label: "linkedGuestUsers",
            },
        },
    },
    rooms: {
        todos: {
            presence: i.entity({}),
        },
    },
});

export type AppSchema = typeof _schema;
export default _schema;
