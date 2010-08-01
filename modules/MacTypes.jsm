// Based on /System/Library/Frameworks/CoreServices.framework/Headers/../Frameworks/CarbonCore.framework/Headers/MacTypes.h
function MacTypes_h(lib) {

    if (this._MACTYPES_H)
        return;
    this._MACTYPES_H = true;

    this.UInt8 = ctypes.unsigned_char;
    this.SInt8 = ctypes.signed_char;
    this.UInt16 = ctypes.unsigned_short;
    this.SInt16 = ctypes.short;
    this.UInt32 = ctypes.unsigned_long;
    this.SInt32 = ctypes.long;
    this.wide = new ctypes.StructType("wide", [{lo: this.UInt32}, {hi: this.SInt32}]);
    this.UnsignedWide = new ctypes.StructType("UnsignedWide", [{lo: this.UInt32}, {hi: this.UInt32}]);
    this.SInt64 = ctypes.long_long;
    this.UInt64 = ctypes.unsigned_long_long;
    this.Fixed = this.SInt32;
    this.FixedPtr = this.Fixed.ptr;
    this.Fract = this.SInt32;
    this.FractPtr = this.Fract.ptr;
    this.UnsignedFixed = this.UInt32;
    this.UnsignedFixedPtr = this.UnsignedFixed.ptr;
    this.ShortFixed = ctypes.short;
    this.ShortFixedPtr = this.ShortFixed.ptr;
    this.Float32 = ctypes.float;
    this.Float64 = ctypes.double;
    this.Float80 = new ctypes.StructType("Float80", [{exp: this.SInt16}, {man: this.UInt16.array(4)}]);
    this.Float96 = new ctypes.StructType("Float96", [{exp: this.SInt16.array(2)}, {man: this.UInt16.array(4)}]);
    this.Float32Point = new ctypes.StructType("Float32Point", [{x: this.Float32}, {y: this.Float32}]);
    this.Ptr = ctypes.char.ptr;
    this.Handle = this.Ptr.ptr;
    this.Size = ctypes.long;
    this.OSErr = this.SInt16;
    this.OSStatus = this.SInt32;
    this.LogicalAddress = ctypes.void_t.ptr;
    this.ConstLogicalAddress = ctypes.void_t.ptr;
    this.PhysicalAddress = ctypes.void_t.ptr;
    this.BytePtr = this.UInt8.ptr;
    this.ByteCount = ctypes.unsigned_long;
    this.ByteOffset = ctypes.unsigned_long;
    this.Duration = this.SInt32;
    this.AbsoluteTime = this.UnsignedWide;
    this.OptionBits = this.UInt32;
    this.ItemCount = ctypes.unsigned_long;
    this.PBVersion = this.UInt32;
    this.ScriptCode = this.SInt16;
    this.LangCode = this.SInt16;
    this.RegionCode = this.SInt16;
    this.FourCharCode = this.UInt32;
    this.OSType = this.FourCharCode;
    this.ResType = this.FourCharCode;
    this.OSTypePtr = this.OSType.ptr;
    this.ResTypePtr = this.ResType.ptr;
    this.Boolean = ctypes.unsigned_char;
    this.ProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.long, []).ptr;
    this.Register68kProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr;
    this.UniversalProcPtr = this.ProcPtr;
    this.ProcHandle = this.ProcPtr.ptr;
    this.UniversalProcHandle = this.UniversalProcPtr.ptr;
    this.PRefCon = ctypes.void_t.ptr;
    this.URefCon = this.UInt32;
    this.SRefCon = this.SInt32;
    this.noErr = 0;
    this.kNilOptions = 0;
    this.kVariableLengthArray = 1;
    this.kUnknownType = 1061109567;
    this.UnicodeScalarValue = this.UInt32;
    this.UTF32Char = this.UInt32;
    this.UniChar = this.UInt16;
    this.UTF16Char = this.UInt16;
    this.UTF8Char = this.UInt8;
    this.UniCharPtr = this.UniChar.ptr;
    this.UniCharCount = ctypes.unsigned_long;
    this.UniCharCountPtr = this.UniCharCount.ptr;
    this.Str255 = ctypes.unsigned_char.array(256);
    this.Str63 = ctypes.unsigned_char.array(64);
    this.Str32 = ctypes.unsigned_char.array(33);
    this.Str31 = ctypes.unsigned_char.array(32);
    this.Str27 = ctypes.unsigned_char.array(28);
    this.Str15 = ctypes.unsigned_char.array(16);
    this.Str32Field = ctypes.unsigned_char.array(34);
    this.StrFileName = this.Str63;
    this.StringPtr = ctypes.unsigned_char.ptr;
    this.StringHandle = this.StringPtr.ptr;
    this.ConstStringPtr = ctypes.unsigned_char.ptr;
    this.ConstStr255Param = ctypes.unsigned_char.ptr;
    this.ConstStr63Param = ctypes.unsigned_char.ptr;
    this.ConstStr32Param = ctypes.unsigned_char.ptr;
    this.ConstStr31Param = ctypes.unsigned_char.ptr;
    this.ConstStr27Param = ctypes.unsigned_char.ptr;
    this.ConstStr15Param = ctypes.unsigned_char.ptr;
    this.ConstStrFileNameParam = this.ConstStr63Param;
    // Dropping inline function 'StrLength'.
    this.ProcessSerialNumber = new ctypes.StructType("ProcessSerialNumber", [{highLongOfPSN: this.UInt32}, {lowLongOfPSN: this.UInt32}]);
    this.ProcessSerialNumberPtr = this.ProcessSerialNumber.ptr;
    this.Point = new ctypes.StructType("Point", [{v: ctypes.short}, {h: ctypes.short}]);
    this.PointPtr = this.Point.ptr;
    this.Rect = new ctypes.StructType("Rect", [{top: ctypes.short}, {left: ctypes.short}, {bottom: ctypes.short}, {right: ctypes.short}]);
    this.RectPtr = this.Rect.ptr;
    this.FixedPoint = new ctypes.StructType("FixedPoint", [{x: this.Fixed}, {y: this.Fixed}]);
    this.FixedRect = new ctypes.StructType("FixedRect", [{left: this.Fixed}, {top: this.Fixed}, {right: this.Fixed}, {bottom: this.Fixed}]);
    this.CharParameter = ctypes.short;
    this.normal = 0;
    this.bold = 1;
    this.italic = 2;
    this.underline = 4;
    this.outline = 8;
    this.shadow = 16;
    this.condense = 32;
    this.extend = 64;
    this.Style = ctypes.unsigned_char;
    this.StyleParameter = ctypes.short;
    this.StyleField = this.Style;
    this.TimeValue = this.SInt32;
    this.TimeScale = this.SInt32;
    this.CompTimeValue = this.wide;
    this.TimeValue64 = this.SInt64;
    this.TimeBaseRecord = new ctypes.StructType("TimeBaseRecord");
    this.TimeBase = this.TimeBaseRecord.ptr;
    this.TimeRecord = new ctypes.StructType("TimeRecord", [{value: this.CompTimeValue}, {scale: this.TimeScale}, {base: this.TimeBase}]);
    this.NumVersion = new ctypes.StructType("NumVersion", [{nonRelRev: this.UInt8}, {stage: this.UInt8}, {minorAndBugRev: this.UInt8}, {majorRev: this.UInt8}]);
    this.developStage = 32;
    this.alphaStage = 64;
    this.betaStage = 96;
    this.finalStage = 128;
    this.NumVersionVariant = new ctypes.StructType("NumVersionVariant", [{parts: this.NumVersion}, {whole: this.UInt32}]);
    this.NumVersionVariantPtr = this.NumVersionVariant.ptr;
    this.NumVersionVariantHandle = this.NumVersionVariantPtr.ptr;
    this.VersRec = new ctypes.StructType("VersRec", [{numericVersion: this.NumVersion}, {countryCode: ctypes.short}, {shortVersion: this.Str255}, {reserved: this.Str255}]);
    this.VersRecPtr = this.VersRec.ptr;
    this.VersRecHndl = this.VersRecPtr.ptr;
    this.Byte = this.UInt8;
    this.SignedByte = this.SInt8;
    this.WidePtr = this.wide.ptr;
    this.UnsignedWidePtr = this.UnsignedWide.ptr;
    this.extended80 = this.Float80;
    this.extended96 = this.Float96;
    this.VHSelect = this.SInt8;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");

const EXPORTED_SYMBOLS = ["MacTypes_h"];
