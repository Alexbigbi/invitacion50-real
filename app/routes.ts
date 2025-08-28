import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layouts/header.tsx", [
        index("routes/index.tsx"),
    ]),
    route("asistentes", "routes/assistants.tsx"),
    route("asistentes/:id", "routes/assistant.tsx"),
    route("newAssistant", "routes/newAssistant.tsx"),
    route("login", "routes/login.tsx"),
    route("signup", "routes/signup.tsx"),
] satisfies RouteConfig;
