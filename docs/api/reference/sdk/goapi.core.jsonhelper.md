
JsonHelper
================

Class JsonHelper.

### Fields
Name |Value | Description
:----|:-----|:-----------
DateTimeFormat|yyyy-MM-ddTHH:mm:ss|The date time format used for calls to the API REST methods

### Properties
Name | Description
:----|:------------
[DefaultSettings](GoApi.Core.JsonHelper.DefaultSettings.md)|Gets the default serialization/deserialization settings.

### Constructors
Name | Description
:----|:------------
[JsonHelper()](GoApi.Core.JsonHelper.JsonHelper__.md)|

### Methods
Name | Description
:----|:------------
[DateTimeToIso(Nullable&lt;System.DateTime&gt; dateTime)](GoApi.Core.JsonHelper.DateTimeToIso_Nullable_dateTime_.md)|Convert DateTime to a string representation of the date/time used when calling API REST methods
[Deserialize(string json, JsonSerializerSettings settings = )](GoApi.Core.JsonHelper.Deserialize_String_json__JsonSerializerSettings_settings____.md)|Deserializes the specified json string into an object of type T.
[GetApiResultObject(string json)](GoApi.Core.JsonHelper.GetApiResultObject_String_json_.md)|Gets the API result object.
[Serialize(object value, JsonSerializerSettings settings = )](GoApi.Core.JsonHelper.Serialize_Object_value__JsonSerializerSettings_settings____.md)|Serializes the specified object into a json string.


