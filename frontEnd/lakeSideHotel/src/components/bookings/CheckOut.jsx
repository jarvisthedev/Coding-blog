import React, { useEffect } from "react";
import BookingForm from "./BookingForm";
import { useParams, useNavigate, useState } from "react-router-dom";
import { getRoomById } from "../utils/ApiFuctions";
import {
  FaCar,
  FaParking,
  FaTshirt,
  FaTv,
  FaUtensils,
  FaWifi,
  FaWineGlassAlt,
} from "react-icons/fa";

const CheckOut = () => {
  const { id: roomId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [roomInfo, setRoomInfo] = useState({
    photo: "",
    roomType: "",
    roomPrice: "",
  });

  useEffect(() => {
    setTimeout(() => {
      getRoomById(roomId)
        .then((response) => {
          setRoomInfo(response);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, 2000);
  }, [roomId]);
  return (
    <div>
      <section className="container">
        <div className="row flex-column flex-md-row align-items-center">
          <div className="col-md-4 mt-5 mb-5">
            {isLoading ? (
              <p>Loading room information</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="room-info">
                <img
                  src={`data:image/png;base64,,${roomInfo.photo}`}
                  alt={`A ${roomInfo.roomPrice} room`}
                  style={{ width: "100%", height: "200px" }}
                />
                <table>
                  <tbody>
                    <tr>
                      <th>Room Type : </th>
                      <th>{roomInfo.roomType}</th>
                    </tr>

                    <tr>
                      <th>Room Price : </th>
                      <th>{roomInfo.roomPrice}</th>
                    </tr>

                    <tr>
                      <td>
                        <ul className="list-unstyled">
                          <li>
                            <FaWifi /> Wifi
                          </li>

                          <li>
                            <FaTv /> Netflix Premium
                          </li>

                          <li>
                            <FaUtensils /> Breakfast
                          </li>

                          <li>
                            <FaWineGlassAlt /> Mini bar refreshment
                          </li>

                          <li>
                            <FaCar /> Car Service
                          </li>

                          <li>
                            <FaParking /> Parking Space
                          </li>

                          <li>
                            <FaTshirt /> Laundry
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
