import json

# List of namespaces to remove
NAMESPACES = [
    "Microsoft.AspNetCore.",
    "Microsoft.OData.",
    "Microsoft.Win32.",
    "System.Collections.",
    "System.ModuleHandle",
    "System.IntPtr",
    "System.IO.",
    "System.IServiceProvider",
    "System.Net.",
    "System.Nullable.",
    "System.ReadOnlySpan",
    "System.ReadOnlyMemory",
    "System.Reflection.",
    "System.Runtime.",
    "System.RuntimeFieldHandle",
    "System.RuntimeMethodHandle",
    "System.RuntimeTypeHandle",
    "System.Type",
    "System.Security.",
    "System.Threading.",
    "System.Type.",
    "One.Common.",
    "One.Domain",
    "Web.ExternalApiCore."
]

def should_remove(key):
    return any(key.startswith(ns) for ns in NAMESPACES)

def clean_dict(d):
    if isinstance(d, dict):
        keys_to_remove = [k for k in d if should_remove(k)]
        for k in keys_to_remove:
            del d[k]
        for v in d.values():
            clean_dict(v)
    elif isinstance(d, list):
        for item in d:
            clean_dict(item)

def main():
    with open('openapi/swagger.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    clean_dict(data)

    with open('openapi/swagger.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    main()