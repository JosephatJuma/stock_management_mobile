import React from "react";
import { useDispatch } from "react-redux";
import ApiClient from "../apiClient";
import { setSuccess } from "../../redux/slices/notification.slice";
import useSetError from "./useSetError";
import { setCompany, setLoading } from "../../store/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function useCompany() {
  const dispatch = useDispatch();
  const { captureError } = useSetError();
  const navigate = useNavigate();
  const apiClient = new ApiClient();
  const handleCreateCompany = async (data) => {
    dispatch(setLoading(true));
    try {
      const response = await apiClient._makeRequest("post", "companies", data);
      if (response.status === 201) {
        dispatch(setCompany(response.data.company));
        dispatch(setSuccess(response.data.message));
        Cookies.set("company", JSON.stringify(response.data.company));
        return navigate("/", { replace: true });
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false));
  };
  return { handleCreateCompany };
}

export default useCompany;
