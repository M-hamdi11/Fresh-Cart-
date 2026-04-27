import AddressesContent from "./AddressesContent";
import ProfilePage from "./profilepage";
import SettingsContent from "./settingcontent";
export default function Page() {
  return (
    <ProfilePage 
      // نمرر المكونات كـ Props لكي تظل Server Components محتفظة بخصائصها
      addressesChild={<AddressesContent />} 
      settingsChild={<SettingsContent />}
    />
  );
}
