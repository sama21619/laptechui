import useLocationForm from './useLocationForm';
import Select from 'react-select';

function LocationForm({ onChange }) {
    const { state, onCitySelect, onDistrictSelect, onWardSelect } = useLocationForm(false);

    const { cityOptions, districtOptions, wardOptions, selectedCity, selectedDistrict, selectedWard } = state;

    return (
        <div className="form-container my-8">
            <div className="select-container flex">
                <Select
                    name="cityId"
                    key={`cityId_${selectedCity?.value}`}
                    isDisabled={cityOptions.length === 0}
                    options={cityOptions}
                    onChange={(option) => onCitySelect(option)}
                    placeholder="Tỉnh/Thành"
                    defaultValue={selectedCity}
                />

                <Select
                    name="districtId"
                    key={`districtId_${selectedDistrict?.value}`}
                    isDisabled={districtOptions.length === 0}
                    options={districtOptions}
                    onChange={(option) => onDistrictSelect(option)}
                    placeholder="Quận/Huyện"
                    defaultValue={selectedDistrict}
                />

                <Select
                    name="wardId"
                    key={`wardId_${selectedWard?.value}`}
                    isDisabled={wardOptions.length === 0}
                    options={wardOptions}
                    placeholder="Phường/Xã"
                    onChange={(option) => {
                        onWardSelect(option);
                        onChange({ward: option.label, district: selectedDistrict.label, city: selectedCity.label})
                    }}
                    defaultValue={selectedWard}
                />
            </div>
        </div>
    );
}

export default LocationForm;
