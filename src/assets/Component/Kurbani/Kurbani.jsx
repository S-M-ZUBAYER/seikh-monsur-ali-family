import { useState } from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";

const Kurbani = () => {
  const [mainInput, setMainInput] = useState("");
  const [fields, setFields] = useState([""]);
  const [savedData, setSavedData] = useState([]);

  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  const handleChange = (index, value) => {
    setFields(fields.map((field, i) => (i === index ? value : field)));
  };

  const handleSave = () => {
    setSavedData([...savedData, { main: mainInput, fields }]);
    setMainInput("");
    setFields([""]);
  };

  return (
    <div className="min-h-[100vh] pt-5">
      <div className="">
        <div className="mb-4">
          <input
            type="text"
            className="border p-2 mb-4 w-full"
            value={mainInput}
            onChange={(e) => setMainInput(e.target.value)}
            placeholder="Owner name"
          />
          {fields.map((field, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                className="border p-2 flex-1 mr-2"
                value={field}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Sub Owner Name ${index + 1}`}
              />
              {index === fields.length - 1 && (
                <button
                  type="button"
                  className="bg-blue-500 text-white p-2 rounded"
                  onClick={handleAddField}
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded mb-4"
          onClick={handleSave}
        >
          Save
        </button>
        <div className="mt-4">
          {savedData.length > 0 && (
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-1 border text-sm">কুরবানী</th>
                  <th className="py-2 px-1 border text-sm">ভাগ</th>
                  <th className="py-2 px-1 border text-sm">মাথা বাদে মোট গোস্ত</th>
                  <th className="py-2 px-1 border text-sm">মাথার ওজন</th>
                  <th className="py-2 px-1 border text-sm">মোট গোস্ত</th>
                  <th className="py-2 px-1 border text-sm">নিজের ভাগ</th>
                  <th className="py-2 px-1 border text-sm">আত্মীয়-এর ভাগ</th>
                  <th className="py-2 px-1 border text-sm">ছিন্নির ভাগ</th>
                  <th className="py-2 px-1 border text-sm">কাজের গোস্ত</th>
                  <th className="py-2 px-1 border text-sm">গোস্ত রান্নার জন্য</th>
                  <th className="py-2 px-1 border text-sm">চূড়ান্ত নিজ এবং আত্মীয়-এর গোস্ত</th>
                  <th className="py-2 px-1 border text-sm">ছিন্নির গোস্ত বাড়িতে নেওয়ার জন্য</th>
                  <th className="py-2 px-1 border text-sm">ছিন্নির গোস্ত বন্টনের জন্য</th>
                  <th className="py-2 px-1 border text-sm">পায়া</th>
                  <th className="py-2 px-1 border text-sm">ভুড়ি</th>
                  <th className="py-2 px-1 border text-sm">চামড়া</th>
                  <th className="py-2 px-1 border text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {savedData.map((data, index) => (
                  <tr key={index}>
                    <td className="py-1 px-1 w-[230px] border text-xs font-bold">{data.main}</td>
                    <td className="w-[230px] border p-0">
                      <table className="w-full h-full border-collapse">
                        <tbody>
                          {data.fields.map((subInput, subIndex) => (
                            <tr key={subIndex}>
                              <td className="py-2 border w-full text-xs font-semibold">{subInput}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td className="py-2 px-1 border">130</td>
                    <td className="py-2 px-1 border">20</td>
                    <td className="py-2 px-1 border">150</td>
                    <td className="border p-0">
                      <table className="w-full h-full border-collapse">
                        <tbody>
                          {data.fields.map((_, subIndex) => (
                            <tr key={subIndex}>
                              <td className="py-2 px-1 border">6.5</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td className="border p-0">
                      <table className="w-full h-full border-collapse">
                        <tbody>
                          {data.fields.map((_, subIndex) => (
                            <tr key={subIndex}>
                              <td className="py-2 px-1 border">6.5</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td className="py-2 px-1 border">110</td>
                    <td className="py-2 px-1 border">110</td>
                    <td className="border p-0">
                      <table className="w-full h-full border-collapse">
                        <tbody>
                          {data.fields.map((_, subIndex) => (
                            <tr key={subIndex}>
                              <td className="py-2 px-1 border">6.5</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td className="border p-0">
                      <table className="w-full h-full border-collapse">
                        <tbody>
                          {data.fields.map((_, subIndex) => (
                            <tr key={subIndex}>
                              <td className="py-2 px-1 border">6.5</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td className="border p-0">
                      <table className="w-full h-full border-collapse">
                        <tbody>
                          {data.fields.map((_, subIndex) => (
                            <tr key={subIndex}>
                              <td className="py-2 px-1 border">6.5</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td className="py-2 px-1 border">110</td>
                    <td className="py-2 px-1 border">110</td>
                    <td className="py-2 px-1 border">110</td>
                    <td className="py-2 px-1 border">110</td>
                    <td className="flex items-center py-2 px-1 border">
                      <RiEditBoxLine className="w-5 h-5 cursor-pointer text-blue-700 mr-3" />
                      <RiDeleteBin6Line className="w-5 h-5 text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kurbani;
