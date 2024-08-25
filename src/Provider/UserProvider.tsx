// UserProvider.jsx
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function UserProvider() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  // Serialize the user data to JSON
  const serializedUser = JSON.stringify(user);
  
  return (
    <div id="user-data" data-user={serializedUser} style={{ display: 'none' }}></div>
  );
}