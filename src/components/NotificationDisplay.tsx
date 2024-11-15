import React from "react";
import { Button } from "react-bootstrap";
import { NotiDetailViewProps } from "../types/types";

const NotiDetailView: React.FC<NotiDetailViewProps> = ({
  notification,
  onEditClick,
  navigate,
}) => {
  return (
    <div>
      <p>
        <strong>Typ entity:</strong> {notification.entityType}
      </p>
      <p>
        <strong>Název entity:</strong> {notification.entityName}
      </p>
      <p>
        <strong>Jméno:</strong> {notification.whistlerName}
      </p>
      <p>
        <strong>Věk:</strong> {notification.whistlerAge}
      </p>
      {notification.whistlerFile &&
        "originalname" in notification.whistlerFile && (
          <p>
            <strong>Soubor:</strong> {notification.whistlerFile.originalname}
          </p>
        )}
      <div className="mt-3 d-flex justify-content-center">
        <Button
          variant="primary"
          className="mt-3"
          onClick={() => navigate("/notificationlist")}
        >
          Zpět
        </Button>
        <Button variant="primary" className="ms-3 mt-3" onClick={onEditClick}>
          Editovat
        </Button>
      </div>
    </div>
  );
};

export default NotiDetailView;
