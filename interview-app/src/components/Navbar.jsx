/* eslint-disable react/prop-types */

export default function Navbar({ categories, setSelectedCategory, searchTerm, setSearchTerm }) {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Web Dev Interview Questions</h1>

        <select 
          className="bg-blue-800 text-white p-2 rounded mt-2 md:mt-0"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search Questions..."
          className="p-2 rounded bg-white text-black mt-2 md:mt-0 w-full md:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}
