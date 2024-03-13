import type { UUID, Profile } from "@/types.d";

export async function getProfile(id: UUID): Promise<Profile> {
  return Promise.resolve({
    id,
    address: null,
    email: "pascal.luxain@gmail.com",
    firstname: "Pascal",
    lastname: "Luxain",
    phoneNumber: "+43 663 0311 0394",
    qualification: "Senior Frontend Developer",
  });
}
