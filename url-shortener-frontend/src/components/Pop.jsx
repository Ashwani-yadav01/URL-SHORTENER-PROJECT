import React from "react";

const Popup = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>🎉 Welcome to the App!</h2>
        <p>Note: This website is hosted on a free-tier deployment platform.</p>
        <p>
          Due to this, you may experience delays or temporary issues with login
          and sign-up functionalities.
        </p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  popup: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
  },
};

export default Popup;
