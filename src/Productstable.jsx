function Productstable() {
  const table = [
    {
      title: "Abstract 3D",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "./images/table1.png",
      stock: "32 in stock",
      price: "$ 45.99",
      totalsales: "20",
    },
    {
      title: "Sarphens Illustration",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "./images/table2.png",
      stock: "32 in stock",
      price: "$ 45.99",
      totalsales: "20",
    },
  ];
  return (
    <>
      <div className="productcontainer">
        <table className="product-table">
          <thead>
            <th>Product Sell</th>
            <th>
              {" "}
              <input
                type="text"
                className="searchbar-input"
                placeholder="🔍 Search..."
              />
            </th>
            <th>
              {" "}
              <select>
                <option className="opt">Quarterly</option>
              </select>
            </th>
          </thead>
        </table>

        <div>
          <table className="product-content">
            <tr className="producthead">
              <td>Product Name</td>
              <td>Stock</td>
              <td>Price</td>
              <td>Total Sales</td>
            </tr>

            {table.map((con, index) => (
              <tr key={index} className="tableconts">
                <td className="imgtit">
                  <img src={con.img} className="tableimg" />
                  <div className="tablecontent">
                    <p className="tit">{con.title}</p>
                    <p className="imgpara">{con.para}</p>
                  </div>
                </td>
                <td className="tablestock">{con.stock}</td>
                <td className="tableprice">{con.price}</td>
                <td>{con.totalsales}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Productstable;
