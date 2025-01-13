import React from "react";
import { setError, setSuccess } from "../../redux/slices/notification.slice";

import {
  setCategoriess,
  setLoading,
  toggleShowAddCategoryModal,
  setSubmitting,
} from "../../store/slices/categories.slice";

import ApiClient from "../apiClient";
import useSetError from "./useSetError";
import { useDispatch, useSelector } from "react-redux";
function useCategories() {
  const dispatch = useDispatch();
  const api = new ApiClient();
  const { captureError } = useSetError();
  const company = useSelector((state) => state.auth.company);

  const handleFetchCategories = async () => {
    dispatch(setLoading(true));
    try {
      const response = await api._makeRequest(
        "get",
        `categories/${company?.id}`
      );

      if (response.status === 200) {
        dispatch(setCategoriess(response.data));
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false));
  };

  const handleAddCategory = async (data) => {
    setSubmitting(true);
    try {
      const response = await api._makeRequest(
        "post",
        `categories/${company?.id}`,
        data
      );
      if (response.status === 201) {
        dispatch(setSuccess(response.data.message));

        handleFetchCategories();
        dispatch(toggleShowAddCategoryModal());
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    setSubmitting(false);
  };
  return { handleFetchCategories, handleAddCategory };
}

export default useCategories;
