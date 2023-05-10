import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MedicationState } from "./medication-state";
import { Medication } from "../model/medication";

const initialState: MedicationState = {
  medications: [],
};

export const medicationSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {
    setMedications(
      state: MedicationState,
      action: PayloadAction<Medication[]>
    ) {
      state.medications = action.payload;
    },
    removeMedication(state: MedicationState, action: PayloadAction<number>) {
      state.medications = state.medications.filter(
        (medication) => medication.id !== action.payload
      );
    },
  },
});

export const { setMedications, removeMedication } = medicationSlice.actions;
