import { useState, useEffect } from "react";

// TODO: Implement HOC Pattern
const withLoading = (WrappedComponent, delay = 2000) => {
  const LoadingComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <div>
          <h2>{props.title}</h2>
          <div className="spinner" />
        </div>
      );
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  LoadingComponent.displayName = `withLoading(${
    WrappedComponent.displayName
  })`;
  return LoadingComponent;
};

function Profile({ title = "Profile" }) {
  const user = { name: "John Doe", email: "john@example.com" };

  return (
    <div>
      <h2>{ title }</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

function Dashboard({ title = "Dashboard" }) {
  const data = { key: "value" };

  return (
    <div>
      <h2>{ title }</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

const ProfileWithLoading = withLoading(Profile, 2000);
const DashboardWithLoading = withLoading(Dashboard, 3000);

function WithHoc() {
  return (
    <main className="container">
      <ProfileWithLoading title="Profile" />
      <DashboardWithLoading title="Dashboard" />
    </main>
  );
}

export default WithHoc;
