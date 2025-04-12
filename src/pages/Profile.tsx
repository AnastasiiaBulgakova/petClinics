import { useGetUserProfileQuery } from '@/shared/services/api/user/userProfile.api';
import EditProfileForm from '@/widgets/forms/EditProfileForm/EditProfileForm';

const Profile = () => {
  const profile = Object.assign({}, useGetUserProfileQuery().data);
  return <EditProfileForm profile={profile} />;
};

export default Profile;
