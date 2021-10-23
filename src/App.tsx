import React from "react";
import axios from "axios";
import Logo from "./components/Logo";
import Card from "./components/Card";
import Chart from "./components/Char";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Image from "./components/Image";
import { Images } from "./constants/images";
import Item from "./components/Item";

interface Props {}

const App = (props: Props) => {
  const [confirmed, setConfirmed] = React.useState<number>(0);
  const [recovered, setRecovered] = React.useState<number>(0);
  const [deaths, setDeath] = React.useState<number>(0);

  const [confirmedDetail, setConfirmedDetail] = React.useState<number>(0);
  const [recoveredDetail, setRecoveredDetail] = React.useState<number>(0);
  const [deathsDetail, setDeathDetail] = React.useState<number>(0);

  const [country, setCountry] = React.useState<string>("");

  const [countries, setCountries] = React.useState<string[]>([]);

  React.useEffect(() => {
    axios.get("https://covid19.mathdro.id/api").then((response) => {

      setConfirmed(response.data.confirmed.value);
      setRecovered(response.data.recovered.value);
      setDeath(response.data.deaths.value);
    });
  }, []);

  React.useEffect(() => {
    axios.get("https://covid19.mathdro.id/api/countries").then((response) => {
      setCountries(response.data.countries.map((item: any) => item.name));
    });
  }, []);

  React.useEffect(() => {

    if (country === "") return;
    axios
      .get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then((response) => {
        const confirmed = response.data.confirmed.value;
        const recovered = response.data.recovered.value;
        const deaths = response.data.deaths.value;

        setConfirmedDetail(response.data.confirmed.value);
        setRecoveredDetail(response.data.recovered.value);
        setDeathDetail(response.data.deaths.value);
      });
  }, [country]);

  if (!confirmed || !deaths) return <p>loading...........</p>;

  return (
    <div className="pt-14">
      <Header />
      <Section1
        style="w-full flex p-20"
        heading="Stay Home Stay Safe"
        text="Coronavirus (COVID-19) được phát hiện lần đầu tiên tại Vũ Ván, Hồ
            Bắc, Trung Quốc vào tháng 12 năm 2019, đợt bùng phát sau đó được Tổ
            chức Y tế Thế giới (WHO) công nhận là đại dịch vào ngày 11 tháng 3
            năm 2020."
      />
      {/* <div className="">
        <Item img={Images.Stayhome} heading="Các vật dụng dính mầm bệnh" />
      </div> */}
      <div className="flex-col bg-blue-50 py-10">
        <Heading
          style="font-bold text-2xl text-red-400 text-left pl-56"
          heading="Coronavirus COVID 19"
        />
        <Text
          style="py-5 text-red-500 font-bold text-left px-56"
          text="Bệnh coronavirus (COVID-19) là một bệnh truyền nhiễm do một loại coronavirus mới phát hiện gây ra."
        />
        <Text
          style="py-3 text-red-500 text-left px-56"
          text="Hầu hết những người bị nhiễm vi rút COVID-19 sẽ bị bệnh đường hô hấp
         từ nhẹ đến trung bình và hồi phục mà không cần điều trị đặc biệt. Người lớn tuổi
          và những người có các vấn đề y tế tiềm ẩn như bệnh tim mạch, tiểu đường, bệnh hô
           hấp mãn tính và ung thư có nhiều khả năng phát triển bệnh nghiêm trọng hơn."
        />
        <Text
          style="py-3 text-red-500 text-left px-56"
          text="Cách tốt nhất để ngăn ngừa và làm chậm sự lây truyền là được thông báo đầy đủ
           về vi rút COVID-19, căn bệnh mà nó gây ra và cách thức lây lan của nó. Bảo vệ bản thân
            và những người khác khỏi bị nhiễm trùng bằng cách rửa tay hoặc sử dụng chất tẩy rửa 
            có cồn thường xuyên và không chạm vào da mặt."
        />
      </div>
      <div id="trieuchung" className="py-10 w-full flex justify-center">
        <Image img={Images.Stayhome} />
        <div className="w-6/12 p-5">
          <Text
            text="Các triệu chứng của Coronavirus"
            style="text-2xl text-blue-900 font-bold text-left"
          />
          <Text
            style="text-left text-red-500 py-3"
            text="Vi rút COVID-19 ảnh hưởng đến những người khác nhau theo những cách khác nhau. COVID-19 là một bệnh đường hô hấp và hầu hết những người bị nhiễm bệnh sẽ phát triển các triệu chứng nhẹ đến trung bình và hồi phục mà không cần điều trị đặc biệt. Những người có bệnh lý tiềm ẩn và những người trên 60 tuổi có nguy cơ mắc bệnh nặng và tử vong cao hơn."
          />
          <div className="flex justify-around">
            <div className="text-red-400">
              <p>Các triệu chứng thường gặp bao gồm:</p>
              <ul className="divide-red-500">
                <li>Sốt</li>
                <li>Mệt mỏi</li>
                <li>Ho khan</li>
              </ul>
            </div>
            <div className="text-red-400">
              <p>Các triệu chứng khác bao gồm:</p>
              <ul className="divide-red-500">
                <li>Khó thở</li>
                <li>Mỏi cơ</li>
                <li>Đau họng</li>
              </ul>
            </div>
          </div>
          <Text
            style="text-left text-red-500 py-3"
            text="Những người có các triệu chứng nhẹ nhưng vẫn khỏe mạnh nên tự cách ly và liên hệ với nhà cung cấp dịch vụ y tế của họ hoặc đường dây thông tin COVID-19 để được tư vấn về xét nghiệm và chuyển tuyến."
          />
          <Text
            style="text-left text-red-500"
            text="Những người bị sốt, ho hoặc khó thở nên gọi cho bác sĩ của họ và tìm kiếm sự chăm sóc y tế."
          />
        </div>
      </div>
      <div id="saveyourself" className="py-10 w-full">
        <Text
          style="text-2xl text-blue-900 font-bold text-center"
          text="Thực hiện các bước để bảo vệ chính bạn"
        />
        <div className="flex w-full">
          <div className="w-7/12">
            <Text
              style="text-xl font-bold text-blue-900 text-left px-20 pt-10 pb-5"
              text="Rửa tay thường xuyên"
            />
            <ul>
              <li>
                <Text
                  style="text-red-500 px-24 py-2"
                  text="- Thường xuyên rửa tay bằng xà phòng và nước trong ít nhất 20 giây, đặc biệt là sau khi bạn ở nơi công cộng, hoặc sau khi xì mũi, ho hoặc hắt hơi."
                />
              </li>
              <li>
                <Text
                  style="text-red-500 px-24 py-2"
                  text="- Nếu không có sẵn xà phòng và nước, hãy sử dụng chất khử trùng tay có chứa ít nhất 60% cồn. Che tất cả các bề mặt của bàn tay của bạn và chà xát chúng với nhau cho đến khi chúng cảm thấy khô."
                />
              </li>
              <li>
                <Text
                  style="text-red-500 px-24 py-2"
                  text="- Tránh chạm vào mắt, mũi và miệng của bạn bằng tay chưa rửa sạch."
                />
              </li>
            </ul>
          </div>
          <Image img={Images.Stayhome} />
        </div>
        <div className="flex flex-row-reverse w-full">
          <div className="w-7/12">
            <Text
              style="text-xl font-bold text-blue-900 text-left px-20 pt-10 pb-5"
              text="Rửa tay thường xuyên"
            />
            <ul>
              <li>
                <Text
                  style="text-red-500 px-24 py-2"
                  text="- Thường xuyên rửa tay bằng xà phòng và nước trong ít nhất 20 giây, đặc biệt là sau khi bạn ở nơi công cộng, hoặc sau khi xì mũi, ho hoặc hắt hơi."
                />
              </li>
              <li>
                <Text
                  style="text-red-500 px-24 py-2"
                  text="- Nếu không có sẵn xà phòng và nước, hãy sử dụng chất khử trùng tay có chứa ít nhất 60% cồn. Che tất cả các bề mặt của bàn tay của bạn và chà xát chúng với nhau cho đến khi chúng cảm thấy khô."
                />
              </li>
              <li>
                <Text
                  style="text-red-500 px-24 py-2"
                  text="- Tránh chạm vào mắt, mũi và miệng của bạn bằng tay chưa rửa sạch."
                />
              </li>
            </ul>
          </div>
          <Image img={Images.Stayhome} />
        </div>
      </div>
      <div id="inforcovid" className="inforcovid bg-blue-50">
        <Text
          style="text-red-500 px-24 py-2 text-2xl font-bold text-center"
          text="Thông tin COVID-19 trên thế giới"
        />
        <div className="text-center py-8">
          <p className="text-xl mb-2">Chọn Quốc gia</p>
          <select
            name=""
            id=""
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="--------">The gioi</option>
            {countries.map((country) => {
              return <option value={country}>{country}</option>;
            })}
          </select>
        </div>
        <div className="items flex items-center justify-around">
          <Card
            tieude="Số ca nhiễm"
            soCaNhiem={confirmedDetail}
            ngay="Sun Aug 08 2021"
            footer="Number of active case of COVID19"
          />
          <Card
            tieude="Số ca khỏi bệnh"
            soCaNhiem={recoveredDetail}
            ngay="Sun Aug 08 2022"
            footer="Number of active case of COVID19"
          />
          <Card
            tieude="Số ca tử vong"
            soCaNhiem={deathsDetail}
            ngay="Sun Aug 08 2023"
            footer="Number of active case of COVID19"
          />
        </div>
      </div>
      <div className="footer">@copyright</div>
    </div>
  );
};

export default App;
