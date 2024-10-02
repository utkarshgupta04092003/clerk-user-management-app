import { currentUser } from "@clerk/nextjs/server";

export default async function page() {
  const user = await currentUser();
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[100vh] bg-green-50">
      <h1 className="text-3xl font-semibold ">Dashboard page</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Field
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                Firstname
              </td>
              <td className="px-6 py-4">{user?.firstName}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                Lastname
              </td>
              <td className="px-6 py-4"> {user?.lastName}</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                Email
              </td>
              <td className="px-6 py-4">
                {user?.emailAddresses[0]?.emailAddress}
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                Phone
              </td>
              <td className="px-6 py-4">
                {user?.phoneNumbers[0]?.phoneNumber}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
