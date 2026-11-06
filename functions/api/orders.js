
export async function onRequestPost({ request, env }) {
  try {
    if (!env.DB) {
      return Response.json(
        { error: "Database belum terhubung" },
        { status: 500 }
      );
    }

    const order = await request.json();

    if (!order.name || !order.phone || !order.address ||
        !Array.isArray(order.items) || !order.items.length ||
        !Number.isFinite(Number(order.total))) {
      return Response.json(
        { error: "Data pesanan tidak lengkap" },
        { status: 400 }
      );
    }

    const code = order.code || "YAPS-" + Date.now();

    await env.DB.prepare(`
      INSERT INTO orders
      (customer_name, phone, address, items, total, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      order.name,
      order.phone,
      order.address,
      JSON.stringify(order.items),
      Number(order.total),
      "pending",
      order.createdAt || new Date().toISOString()
    ).run();

    return Response.json({ success: true, code });
  } catch (error) {
    return Response.json(
      { error: "Gagal menyimpan pesanan" },
      { status: 500 }
    );
  }
}
