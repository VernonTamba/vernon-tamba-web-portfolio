import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";

export function proxy(request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    if (request.nextUrl.pathname === "/maintenance") {
      const homeUrl = new URL("/", request.url);
      return NextResponse.redirect(homeUrl);
    }
    return NextResponse.next();
  }

  const maintenanceUrl = new URL("/maintenance", request.url);
  return NextResponse.redirect(maintenanceUrl);
}

export const config = {
  matcher: ["/", "/about-me", "/credits", "/maintenance"],
};
