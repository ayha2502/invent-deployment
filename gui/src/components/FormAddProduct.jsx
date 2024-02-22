import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [satuan, setSatuan] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        price: price,
        satuan: satuan
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Sarana Prasarana</h1>
      <h2 className="subtitle">Add New Sarana Prasarana</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Sarana Prasarana"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Jumlah"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Satuan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={satuan}
                    onChange={(e) => setSatuan(e.target.value)}
                    placeholder="Satuan"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
