import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const ManageServices = () => {
  // Define the panel data
  const panels = [
    {
      type: 'PROMO (Serve/Limit)',
      price: '0/10 ($20)',
      status: 'Active',
      id: 'flexSwitchCheckDefault1',
    },
    {
      type: 'PROMO (Serve/Limit)',
      price: '0/10 ($20)',
      status: 'Active',
      id: 'flexSwitchCheckDefault2',
    },
    {
      type: 'PROMO (Serve/Limit)',
      price: '0/10 ($20)',
      status: 'Active',
      id: 'flexSwitchCheckDefault3',
    },
    {
      type: 'PROMO (Serve/Limit)',
      price: '0/10 ($20)',
      status: 'Active',
      id: 'flexSwitchCheckDefault4',
    }
  ];

  return (
    <div className="card-panel-permi">
      <h2 className="wallet-head text-center">Manage Services</h2>
      <div className="astro-main-ser flex items-center flex-wrap justify-between">
        {panels.map((panel, index) => (
          <div key={index} className="w-[40%] panel-access-card flex items-center justify-between">
            <div className="man-top flex items-center justify-between">
              <span className="p-a-t flex items-start flex-col">
                <span className="p-a-type">Type</span>
                <h3 className="top-greet">{panel.type}</h3>
              </span>
              <span className="p-a-t flex items-start flex-col">
                <span className="p-a-type">Price</span>
                <h3 className="top-greet">{panel.price}</h3>
              </span>
              <span className="p-a-t flex items-start flex-col">
                <span className="p-a-type">Status</span>
                <div className="form-check form-switch">
                  {/* <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id={panel.id}
                  /> */}
                  <Switch {...label} />
                </div>
              </span>
            </div>
            <span className="online-type bg-success bg-opacity-50">
              {panel.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
