import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
                <Link to="/create" className="[&.active]:font-bold">
                    Create
                </Link>
                <Link to="/posts" className="[&.active]:font-bold">
                    Posts
                </Link>
            </div>

            <hr />
            <div className="px-4 py-8 flex flex-col justify-center items-center max-w-3xl mx-auto">

                <Outlet />

            </div>

            <TanStackRouterDevtools />
        </>
    ),
})