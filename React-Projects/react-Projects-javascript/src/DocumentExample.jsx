import React from "react";

export default function DocumentExample() {
  const items = [
    {
      name: "تصميم وتطوير موقع إلكتروني",
      quantity: 1,
      price: 1500,
    },
    {
      name: "تصميم واجهة المستخدم",
      quantity: 2,
      price: 350,
    },
    {
      name: "الدعم الفني",
      quantity: 3,
      price: 100,
    },
  ];

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "32px",
      }}
    >
      <div
        id="document"
        style={{
          width: "210mm",
          minHeight: "297mm",
          margin: "0 auto",
          padding: "18mm",
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
          color: "#111827",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingBottom: "24px",
            borderBottom: "2px solid #1f2937",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              YOUR COMPANY
            </h1>

            <p
              style={{
                marginTop: "8px",
                color: "#6b7280",
              }}
            >
              Software & Web Development
            </p>

            <p
              style={{
                margin: 0,
                color: "#6b7280",
              }}
            >
              Riyadh, Saudi Arabia
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <h2
              style={{
                margin: 0,
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              INVOICE
            </h2>

            <p
              style={{
                marginTop: "8px",
                color: "#6b7280",
              }}
            >
              #INV-2026-001
            </p>
          </div>
        </div>

        {/* Customer Information */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginTop: "40px",
          }}
        >
          <div>
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "14px",
                fontWeight: "700",
                color: "#6b7280",
              }}
            >
              BILL TO
            </h3>

            <p style={{ margin: 0, fontWeight: "600" }}>
              Ahmed Mohammed
            </p>

            <p style={{ margin: "4px 0", color: "#6b7280" }}>
              Riyadh, Saudi Arabia
            </p>

            <p style={{ margin: 0, color: "#6b7280" }}>
              ahmed@example.com
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <p style={{ margin: "0 0 8px" }}>
              <strong>Invoice Date:</strong> 03/09/2026
            </p>

            <p style={{ margin: 0 }}>
              <strong>Due Date:</strong> 10/09/2026
            </p>
          </div>
        </div>

        {/* Items */}
        <div style={{ marginTop: "40px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#f3f4f6",
                  borderTop: "1px solid #d1d5db",
                  borderBottom: "1px solid #d1d5db",
                }}
              >
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Description
                </th>

                <th style={{ padding: "12px", textAlign: "center" }}>
                  Qty
                </th>

                <th style={{ padding: "12px", textAlign: "right" }}>
                  Price
                </th>

                <th style={{ padding: "12px", textAlign: "right" }}>
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                const amount = item.quantity * item.price;

                return (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <td style={{ padding: "20px 12px" }}>
                      {item.name}
                    </td>

                    <td
                      style={{
                        padding: "20px 12px",
                        textAlign: "center",
                      }}
                    >
                      {item.quantity}
                    </td>

                    <td
                      style={{
                        padding: "20px 12px",
                        textAlign: "right",
                      }}
                    >
                      {item.price.toFixed(2)} SAR
                    </td>

                    <td
                      style={{
                        padding: "20px 12px",
                        textAlign: "right",
                        fontWeight: "600",
                      }}
                    >
                      {amount.toFixed(2)} SAR
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "40px",
          }}
        >
          <div style={{ width: "320px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} SAR</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <span>VAT (15%)</span>
              <span>{vat.toFixed(2)} SAR</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "16px",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <span>Total</span>
              <span>{total.toFixed(2)} SAR</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div style={{ marginTop: "64px" }}>
          <h3 style={{ marginBottom: "12px" }}>
            Notes
          </h3>

          <p
            style={{
              color: "#6b7280",
              lineHeight: "1.6",
            }}
          >
            Thank you for your business.
            Payment is due within 7 days from
            the invoice date.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "80px",
            paddingTop: "20px",
            borderTop: "1px solid #d1d5db",
            textAlign: "center",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          <p style={{ margin: 0 }}>YOUR COMPANY</p>

          <p style={{ margin: "4px 0" }}>
            Riyadh, Saudi Arabia
          </p>

          <p style={{ margin: 0 }}>
            www.example.com
          </p>
        </div>
      </div>
    </div>
  );
}
