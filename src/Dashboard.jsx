import Chart from "./Chart.jsx";
import Productstable from "./Productstable.jsx";
import Sidebar from "./Sidebar.jsx";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div>
          <div className="dashboard1">
            <h3>Hello Shahrukh 👋🏻,</h3>
            <div className="searchbar">
              <input
                type="text"
                className="searchbar-input"
                placeholder="🔍 Search..."
              />
            </div>
          </div>
          <div className="customer">
            <div className="card">
              <div className="card-conatiner">
                <img src="./images/earning.png" className="cardimg" />
                <div>
                  <p className="card-title">Earning</p>
                  <h6>$198k</h6>
                  <p className="card-details">
                    ↑ 37.8% <span>this month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-conatiner">
                <img src="./images/orders.png" className="cardimg" />
                <div>
                  <p className="card-title">Orders</p>
                  <h6>$2.4k</h6>
                  <p className="card-details1">
                    ↓ 2% <span>this month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-conatiner">
                <img src="./images/balance.png" className="cardimg" />
                <div>
                  <p className="card-title">Balance</p>
                  <h6>$2.4k</h6>
                  <p className="card-details1">
                    ↓ 2% <span>this month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-conatiner">
                <img src="./images/totalsales.png" className="cardimg" />
                <div>
                  <p className="card-title">Total sales</p>
                  <h6>$89k</h6>
                  <p className="card-details">
                    ↑ 11% <span>this month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Chart />
          <Productstable />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
