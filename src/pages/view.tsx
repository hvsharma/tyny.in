import { useState } from "react";

function ViewLinks() {

  const [links, setLinks] = useState<Array<ShortLink>>([]);

  return <div>
    <h1 className="text-3xl px-4 py-8">Created Links</h1>
    <div className="page-container">
      {
        links.length > 0 ? <>
          <table className="table-auto">
            <thead>
              <th>
                Title
              </th>
              <th>
                Shortened Link
              </th>
              <th>
                Long Link
              </th>
            </thead>
            <tbody>
              {
                links.map(({ id, title, shortLink, longLink }) =>
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{shortLink}</td>
                    <td>{longLink}</td>
                  </tr>)
              }
            </tbody>
          </table>
        </> : <>
          <div>You haven&apos;t created any short links yet!</div>
        </>
      }
    </div>
  </div>
}

export default ViewLinks;