import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MedicationState } from "./medication-state";
import { Medication } from "../model/medication";
import { MedicationUtils } from "../utils/medication-utils";

const initialState: MedicationState = {
  medications: [],
};

export const medicationSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {
    addMedication(state: MedicationState, action: PayloadAction<Medication>) {
      state.medications = [
        ...state.medications,
        { ...action.payload, id: MedicationUtils.getNewId(state.medications) },
      ];
    },
    removeMedication(state: MedicationState, action: PayloadAction<number>) {
      state.medications = state.medications.filter(
        (medication) => medication.id !== action.payload
      );
    },
    editMedication(state: MedicationState, action: PayloadAction<Medication>) {
      state.medications = state.medications.map((medication) =>
        medication.id === action.payload.id ? action.payload : medication
      );
    },
  },
});

export const { addMedication, removeMedication, editMedication } =
  medicationSlice.actions;
