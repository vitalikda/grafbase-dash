import { FC, createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from 'services/firebase';

interface IUser {
  uid: string;
  email: string | null;
  name: string | null;
  photoUrl: string | null;
}

interface IAuth {
  loading: boolean;
  user: IUser | null;
  signInWithGitHub: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<IAuth>({
  loading: true,
  user: null,
  signInWithGitHub: async () => {},
  logout: async () => {},
});

const formatUserData = (user: User): IUser => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
});

const createUser = (uid: string, data: any) => {
  return setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true });
};

const useProvideAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);

  const handleAuthChange = async (authState: User | null) => {
    if (!authState) return;

    const formattedUser = formatUserData(authState);
    setUser(formattedUser);
    setLoading(false);
  };

  const handleLogin = async (response: UserCredential) => {
    if (!response.user) {
      throw new Error('No User');
    }

    const userData = formatUserData(response.user);
    createUser(userData.uid as string, userData);
  };

  const clear = () => {
    setUser(null);
    setLoading(true);
  };

  const signInWithGitHub = async () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    const response = await signInWithPopup(auth, provider);
    return handleLogin(response);
  };

  const logout = async () => {
    await signOut(auth);
    clear();
    return;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthChange);
    return () => unsubscribe();
  }, []);

  return {
    loading,
    user,
    signInWithGitHub,
    logout,
  };
};

const AuthProvider: FC = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
