import clientSupabase from "../client/supabase-client";
import z from "zod";

const Contacts = z.object({
    email: z.string(),
    favorite: z.boolean(),
    firstName: z.string(),
    lastName: z.string(),
    username: z.string(),
    phone: z.string(),
    profileId: z.string(),
    avatar: z.string().optional(),
})

export type Contact = z.infer<typeof Contacts>;

export const createContact = async (contact: Contact) => {
  const { data, error } = await clientSupabase
    .from('contacts')
    .insert([{
      email: contact.email,
      favorite: contact.favorite,
      first_name: contact.firstName,
      last_name: contact.lastName,
      username: contact.username,
      phone: contact.phone,
      avatar: contact.avatar,
      profile_id: contact.profileId,
    }]).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const GetContacts = z.object({
    id: z.string(),
    email: z.string(),
    favorite: z.boolean(),
    firstName: z.string(),
    lastName: z.string(),
    username: z.string(),
    phone: z.string(),
    profileId: z.string(),
    avatar: z.string().optional(),
})

export type getContact = z.infer<typeof GetContacts>;

export const getContacts = async (profileId: string) => {
  const { data, error } = await clientSupabase
    .from('contacts')
    .select('*')
    .eq('profile_id', profileId)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  const contacts = data.map(contact => ({
    id: contact.id,
    email: contact.email,
    favorite: contact.favorite,
    firstName: contact.first_name,
    lastName: contact.last_name,
    username: contact.username,
    phone: contact.phone,
    profileId: contact.profile_id,
    avatar: contact.avatar || undefined,
  }));

  return contacts;
};

export const deleteContact = async (id: string) => {
  const { error } = await clientSupabase
    .from('contacts')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};

export const updateFavoriteStatus = async (id: string, favorite: boolean) => {
  const { error } = await clientSupabase
    .from('contacts')
    .update({ favorite })
    .eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};
