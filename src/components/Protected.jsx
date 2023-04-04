import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

export const Protected = ({ Component }) => {
  const selectorr = useSelector((state) => state.LoginSlice);
  const Isslogged = selectorr.Isslogged;
  const naviagte = useNavigate();
  console.log(selectorr.Isslogged, "see");

  useEffect(() => {
    if (!Isslogged) {
      naviagte("/");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};
