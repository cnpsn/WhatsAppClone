import auth from '@react-native-firebase/auth';

function SignOut() {
    return auth().signOut()
}
export default SignOut;
