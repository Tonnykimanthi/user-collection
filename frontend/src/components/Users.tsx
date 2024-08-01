const Users = () => {
  return (
    <main>
      <table className="mt-5 w-full text-center">
        <tr className="bg-slate-700 text-white [&>th]:py-3">
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        <tr className="odd:bg-secondary even:bg-white [&>td]:border [&>td]:border-ssecondary [&>td]:py-2">
          <td>Antonio</td>
          <td>Mutua</td>
          <td>kimaxh@gmail.com</td>
          <td>123abcd</td>
        </tr>
        <tr className="odd:bg-secondary even:bg-white [&>td]:border [&>td]:border-ssecondary [&>td]:py-2">
          <td>Antonio</td>
          <td>Mutua</td>
          <td>tonnykimanthi@gmail.com</td>
          <td>123abcd</td>
        </tr>
      </table>
    </main>
  );
};

export default Users;
