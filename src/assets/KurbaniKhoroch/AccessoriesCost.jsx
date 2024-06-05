import { useState } from "react";

const AccessoriesCost = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productCost, setProductCost] = useState("");
  const [savedData, setSavedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data
    const formData = { name, productName, productCost };
    setSavedData((prevData) => [...prevData, formData]);
    // Reset form fields after submission
    setName("");
    setProductName("");
    setProductCost("");
  };

  return (
    <div className="min-h-[100vh] pt-5">
      <h2 className="text-2xl font-bold mb-4">Product Form</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-gray-700 font-bold mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="productCost"
            className="block text-gray-700 font-bold mb-2"
          >
            Product Cost
          </label>
          <input
            type="number"
            id="productCost"
            value={productCost}
            onChange={(e) => setProductCost(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      {savedData.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Saved Data</h3>
          {savedData.length > 0 && (
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-1 border text-sm">Name</th>
                  <th className="py-2 px-1 border text-sm">Product Name</th>
                  <th className="py-2 px-1 border text-sm">Product Cost</th>
                </tr>
              </thead>
              <tbody>
                {savedData.map((data, index) => (
                  <tr key={index}>
                    <td className="py-2 px-1 border">{data.name}</td>
                    <td className="py-2 px-1 border">{data.productName}</td>
                    <td className="py-2 px-1 border">{data.productCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AccessoriesCost;
