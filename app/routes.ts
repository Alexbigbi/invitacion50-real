import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layouts/header.tsx", [
        index("routes/index.tsx"),
    ]),
    route("asistentes", "routes/assistants.tsx"),
    route("newAssistant", "routes/newAssistant.tsx"),
    route("asistentes/:id", "routes/assistant.tsx"),
] satisfies RouteConfig;
