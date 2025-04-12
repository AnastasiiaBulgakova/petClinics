import { externalAPI } from '@api/api/client/external.api.ts';

import { userProfileAPI } from '../api/user/userProfile.api';
import { authAPI } from '../';
import { topicAPI } from '../api/user/topic.api';
import { clientAPI } from '../api/client/client.api';
import { clientNewsAPI } from '../api/client/clientNews.api';
import { managerNewsAPI } from '../api/manager/managerNews.api';
import { dewormingAPI } from '../api/client/deworming.api';
import { reproductionAPI } from '../api/client/reproduction.api';
import { petClientAPI } from '../api/client/petClient.api';
import { vaccinationAPI } from '../api/client/vaccination.api';
import { managerAppearanceApi } from '../api/manager/managerAppearanceController.api';
import { doctorAPI } from '../api/doctor/doctor.api';
import { doctorExamApi } from '../api/doctor/doctorExam.api';
import { adminDoctorNonWorkingApi } from '../api/admin/adminDoctorNonWorking.api';

export const middlewares = [
  authAPI.middleware,
  clientNewsAPI.middleware,
  clientAPI.middleware,
  topicAPI.middleware,
  managerNewsAPI.middleware,
  managerAppearanceApi.middleware,
  adminDoctorNonWorkingApi.middleware,
  dewormingAPI.middleware,
  doctorAPI.middleware,
  doctorExamApi.middleware,
  reproductionAPI.middleware,
  petClientAPI.middleware,
  vaccinationAPI.middleware,
  externalAPI.middleware,
  userProfileAPI.middleware,
];
