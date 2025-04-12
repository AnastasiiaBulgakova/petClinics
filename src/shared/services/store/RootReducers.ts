import { combineReducers } from '@reduxjs/toolkit';
import { clientNewsAPI } from '@api/api/client/clientNews.api.ts';
import { externalAPI } from '@api/api/client/external.api.ts';

import { petClientAPI } from '../api/client/petClient.api';
import { authAPI, authenticationSlice } from '../';
import { topicAPI } from '../api/user/topic.api';
import { clientAPI } from '../api/client/client.api';
import themeSlice from '../slice/ThemeSlice/ThemeSlice';
import { managerNewsAPI } from '../api/manager/managerNews.api';
import { dewormingAPI } from '../api/client/deworming.api';
import { reproductionAPI } from '../api/client/reproduction.api';
import { vaccinationAPI } from '../api/client/vaccination.api';
import { userProfileAPI } from '../api/user/userProfile.api';
import { managerAppearanceApi } from '../api/manager/managerAppearanceController.api';
import { doctorAPI } from '../api/doctor/doctor.api';
import { doctorExamApi } from '../api/doctor/doctorExam.api';
import { adminDoctorNonWorkingApi } from '../api/admin/adminDoctorNonWorking.api';

const rootReducers = combineReducers({
  authenticationSlice: authenticationSlice.reducer,
  themeSlice: themeSlice,
  [authAPI.reducerPath]: authAPI.reducer,
  [managerNewsAPI.reducerPath]: managerNewsAPI.reducer,
  [managerAppearanceApi.reducerPath]: managerAppearanceApi.reducer,
  [adminDoctorNonWorkingApi.reducerPath]: adminDoctorNonWorkingApi.reducer,
  [topicAPI.reducerPath]: topicAPI.reducer,
  [clientAPI.reducerPath]: clientAPI.reducer,
  [clientNewsAPI.reducerPath]: clientNewsAPI.reducer,
  [dewormingAPI.reducerPath]: dewormingAPI.reducer,
  [doctorAPI.reducerPath]: doctorAPI.reducer,
  [doctorExamApi.reducerPath]: doctorExamApi.reducer,
  [reproductionAPI.reducerPath]: reproductionAPI.reducer,
  [petClientAPI.reducerPath]: petClientAPI.reducer,
  [vaccinationAPI.reducerPath]: vaccinationAPI.reducer,
  [externalAPI.reducerPath]: externalAPI.reducer,
  [userProfileAPI.reducerPath]: userProfileAPI.reducer,
});
export default rootReducers;
