import { useState } from "react";
import { Button } from "primereact/button";
import user from "../assets/user.png";
import { Dropdown } from "primereact/dropdown";
import "../styles/App.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  type TData = {
    aspek_penilaian_1: number;
    aspek_penilaian_2: number;
    aspek_penilaian_3: number;
    aspek_penilaian_4: number;
  };

  const [data, setData] = useState([
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
    {
      aspek_penilaian_1: 0,
      aspek_penilaian_2: 0,
      aspek_penilaian_3: 0,
      aspek_penilaian_4: 0,
    },
  ]);

  const [options] = useState([
    { name: "0", value: 0 },
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
  ]);

  const updateData = (e: number, index: number, aspekNumber: number): void => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [`aspek_penilaian_${aspekNumber}`]: e,
    };
    setData(newData);
  };

  const saveNilai = (): void => {
    console.log("BUMI >>>");
    // process for manipulate input from user to create object
    const temp: { [key: string]: { [key: string]: number } } = {};

    data.forEach((obj, idx) => {
      const objKeys = Object.keys(obj);
      objKeys.forEach((key) => {
        if (!temp[key]) {
          temp[key] = {};
        }
        const value = Number((obj as Record<string, number>)[key]);
        temp[key][`mahasiswa_${idx + 1}`] = value;
      });
    });

    // uncoment this code below for see the result from browser console
    // console.log(temp)

    // create json and download json file when click button "Simpan"
    const jsonString = JSON.stringify(temp, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "nilai_mahasiswa.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="wrapper">
        <div className="wrapper__content">
          <div className="wrapper__content__header">Aplikasi Penilaian Mahasiswa</div>
          <div className="wrapper__content__main">
            <table>
              <thead>
                <th></th>
                <th>Aspek Penilaian 1</th>
                <th>Aspek Penilaian 2</th>
                <th>Aspek Penilaian 3</th>
                <th>Aspek Penilaian 4</th>
              </thead>
              <tbody>
                {data.map((el: TData, i: number) => {
                  return (
                    <tr key={i}>
                      <td className="student">
                        <div className="item">
                          <img src={user} alt="profile-dummy" />
                          <span>Mahasiswa {i + 1}</span>
                        </div>
                      </td>
                      <td>
                        <Dropdown value={el.aspek_penilaian_1} onChange={(e) => updateData(e.value, i, 1)} options={options} optionLabel="name" placeholder="Masukan Nilai" className="w-full md:w-14rem" data-testid={`dropdown-${i}`} />
                      </td>
                      <td>
                        <Dropdown value={el.aspek_penilaian_2} onChange={(e) => updateData(e.value, i, 2)} options={options} optionLabel="name" placeholder="Masukan Nilai" className="w-full md:w-14rem" />
                      </td>
                      <td>
                        <Dropdown value={el.aspek_penilaian_3} onChange={(e) => updateData(e.value, i, 3)} options={options} optionLabel="name" placeholder="Masukan Nilai" className="w-full md:w-14rem" />
                      </td>
                      <td>
                        <Dropdown value={el.aspek_penilaian_4} onChange={(e) => updateData(e.value, i, 4)} options={options} optionLabel="name" placeholder="Masukan Nilai" className="w-full md:w-14rem" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="wrapper__content__button">
            <Button onClick={saveNilai} severity="info">
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
