export default function BlogLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ borderRight: "1px solid black", padding: "1rem", width: "250px" }}>
        Sidebar
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "1rem" }}>
        {children}
      </div>
    </div>
  );
}
