export const Layout = ({ sidebar, children }) => {
  return (
    <div>
      <header>header</header>
      <div style={{ display: "flex" }}>
        {sidebar}
        <div>{children}</div>
      </div>
      <footer>footer</footer>
    </div>
  );
};
