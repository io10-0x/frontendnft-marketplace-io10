import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinners = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinners;
