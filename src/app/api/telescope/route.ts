import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  // Mock data generation
  // RA: 0 to 24 hours
  // Dec: -90 to +90 degrees
  const ra = Math.random() * 24;
  const dec = (Math.random() * 180) - 90;
  
  // Mock Az/Alt as well, though RA/Dec is usually primary for sky maps
  const az = Math.random() * 360;
  const alt = (Math.random() * 90);

  return NextResponse.json({
    ra,
    dec,
    az,
    alt,
    timestamp: new Date().toISOString(),
  });
}
