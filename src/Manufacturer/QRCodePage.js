import React from "react";

import { Card, Col, Row } from "react-bootstrap";
import drugcipherIcon from "../image/DRUG CIPHER (2).png";
import { QRCode } from "react-qrcode-logo";
import useQuery from "../hooks/useQuery";

export default function QRCodePage() {
  const query =useQuery();
  const id = query.get('id')
  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${id}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">Drug QR Code</h3>
        <Row>
          <Col md={4}>
            <div className="qr_code_div1" style={{ marginTop: 40 }}>
              <QRCode
                id="qr-gen"
                value={id}
                includeMargin={true}
                logoImage={drugcipherIcon}
                logoWidth={100}
                // qrStyle={"dots"}
                size={300}
                logoOpacity={1}
                eyeRadius={[
                  [5, 0, 0, 0],
                  [0, 5, 0, 0],
                  [0, 0, 0, 5],
                ]}
                eyeColor={[
                  {
                    outer: "black",
                    inner: "rgb(3, 66, 110)",
                  },
                  {
                    outer: "black",
                    inner: "rgb(3, 66, 110)",
                  },
                  {
                    outer: "black",
                    inner: "rgb(3, 66, 110)",
                  },
                ]}
              />
            </div>
          </Col>
        </Row>
        <div className="mt-3">
          <button className="man_button" onClick={downloadQRCode}>
            Download
          </button>
        </div>
      </Card>
    </div>
  );
}
