import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("asistentes", "routes/assistants.tsx"),
] satisfies RouteConfig;
