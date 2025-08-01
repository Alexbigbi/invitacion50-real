import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("asistentes", "routes/assistants.tsx"),
    route("newAssistant", "routes/newAssistant.tsx"),
    route("asistentes/:id", "routes/assistant.tsx"),
] satisfies RouteConfig;
