export const dynamic = 'force-dynamic' // will be forced to dynamic ( data not cached )

export const dynamic1 = 'auto' // will be auto ( data cached ) ( by default )

export async function GET() {
    return Response.json({
        time: new Date(),
    })
}