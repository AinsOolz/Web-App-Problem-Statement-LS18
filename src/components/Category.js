import { useParams, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);

  const [search, setSearch] = useState("");

  if (!category) {
    return <h2>Category not found</h2>;
  }

  const filteredSessions = category.sessions.filter(session =>
    session.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>{category.name} Diploma</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search modules..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "10px 14px",
          margin: "12px 0 20px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          outline: "none",
          boxSizing: "border-box"
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #4F7942")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      />


      <ul className="session-list">
        {filteredSessions.length > 0 ? (
          filteredSessions.map(session => (
            <li className="session" key={session.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "session-active" : null
                }
                to={session.id}
              >
                <p className="session-name">{session.name}</p>
              </NavLink>
            </li>
          ))
        ) : (
          <p>No matching modules found.</p>
        )}
      </ul>

      <Outlet />
    </>
  );
}
